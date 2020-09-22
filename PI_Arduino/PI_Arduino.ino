#include <DHT.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

#define DHTPIN 14
#define DHTTYPE    DHT11     // DHT 11
DHT dht(DHTPIN, DHTTYPE);
// variáveis para temperatura ehumidade


const char *ssid = "Um nome legal";
const char *password = "02042020";


float t = 0.0;
float h = 0.0;
char jsonOutput[128];

void setup() {
  // Serial habilitada para verificação de funcionamento
  Serial.begin(115200); 
  dht.begin();

  //Conexão com o wifi
  int timeout = 0;

  Serial.begin(115200);
  delay(5000);
  WiFi.begin(ssid, password);

  Serial.print("Connecting NodeMCU to ");
  Serial.print(ssid);
  Serial.print(' ');

  while (WiFi.status() != WL_CONNECTED) {

    delay(1000);
    timeout++;

    Serial.print('.');
    if (timeout == 60) {
      timeout = 0;
      Serial.print('\n');
      Serial.println("Connection failed!");
      Serial.println("Trying again");
      Serial.print('\n');
      Serial.print("Connecting NodeMCU to ");
      Serial.print(ssid);
      Serial.print(' ');
    }
  }

  Serial.print('\n');
  Serial.println("Connected!");
  Serial.print("My IP:\t");
  Serial.println(WiFi.localIP());


}

void loop() {
  // Lê a temperatura em Celsius (default)
  float newT = dht.readTemperature();
  if (isnan(newT)) {
    Serial.println("Falha para ler o sensor DHT11!");
  } else {
    t = newT;
    Serial.print("Temp:");
    Serial.println(t);
  }

  // Leitura da Humididade
  float newH = dht.readHumidity();
  if (isnan(newH)) {
    Serial.println("Falha para ler o sensor DHT11!");
  } else {
    h = newH;
    Serial.print("Humidade:");
    Serial.println(h);
  }

  if ((WiFi.status() == WL_CONNECTED)) {

    WiFiClient client;
    HTTPClient http;
    
    

    Serial.print("[HTTP] begin...\n");
    // configure traged server and url
    http.begin(client, "http://192.168.31.127:3333/sensor"); //HTTP
    http.addHeader("Content-Type", "application/json");

    const size_t CAPACITY =JSON_OBJECT_SIZE(2);
    StaticJsonDocument<CAPACITY> doc;

    JsonObject object = doc.to<JsonObject>();
    object["temperatura"] = newT;
    object["umidade"] = newH;
    
    serializeJson(doc, jsonOutput);

    Serial.print("[HTTP] POST...\n");
    // start connection and send HTTP header and body
    int httpCode =  http.POST(String(jsonOutput));

    // httpCode will be negative on error
    if (httpCode > 0) {
      // HTTP header has been send and Server response header has been handled
      Serial.printf("[HTTP] POST... code: %d\n", httpCode);

      // file found at server
      if (httpCode == HTTP_CODE_OK) {
        const String& payload = http.getString();
        Serial.println("received payload:\n<<");
        Serial.println(payload);
        Serial.println(">>");
      }
    } else {
      Serial.printf("[HTTP] POST... failed, error: %s\n", http.errorToString(httpCode).c_str());
    }

    http.end();
  }



  delay(60000);
}
