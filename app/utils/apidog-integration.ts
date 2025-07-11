/**
 * OpenAPI tanımını Apidog'a aktaran fonksiyon
 * @param projectId Apidog proje ID'si
 * @param apiKey Apidog API anahtarı
 * @param openApiDefinition OpenAPI tanımı (JSON formatında)
 * @returns Apidog API yanıtı
 */
export async function exportApiToApidog(
  projectId: string, 
  apiKey: string
) {
  try {
    // Apidog API dokümantasyonunda belirtilen URL formatını kullanalım
    const url = `https://api.apidog.com/v1/projects/${projectId}/import-openapi`;
    
    // Farklı bir yaklaşım deneyelim: Doğrudan OpenAPI tanımını gönderelim
    // Apidog API'si muhtemelen doğrudan içerik göndermeyi de destekler
    
    // Apidog API dokümantasyonuna göre istek formatını düzenleyelim
    const requestBody = {
      input: {
        // Doğrudan OpenAPI tanımını gönderelim
        url: "https://test-dog-woad.vercel.app/api/openapi.json"
      },
      options: {
        targetEndpointFolderId: 0,
        targetSchemaFolderId: 0,
        endpointOverwriteBehavior: "OVERWRITE_EXISTING",
        schemaOverwriteBehavior: "OVERWRITE_EXISTING",
        updateFolderOfChangedEndpoint: false,
        prependBasePath: false
      }
    };
    
    console.log('Apidog\'a gönderilen istek:', JSON.stringify(requestBody, null, 2));
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Apidog-Api-Version': '2024-03-28',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      // Hata durumunda daha detaylı bilgi almak için yanıtı JSON olarak okuyoruz
      const errorText = await response.text();
      throw new Error(`Apidog API hatası: ${response.status} ${response.statusText}\nDetay: ${errorText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Apidog API entegrasyonu hatası:', error);
    throw error;
  }
}

/**
 * Zopio API'sinin OpenAPI tanımını oluşturan fonksiyon
 * Bu fonksiyon projenizin API yapısına göre özelleştirilmelidir
 */
export function generateOpenApiDefinition() {
  // Burada projenizin API yapısına göre OpenAPI tanımını oluşturun
  return {
    openapi: "3.0.0",
    info: {
      title: "Zopio API",
      version: "1.0.0",
      description: "Zopio projesi API dokümantasyonu"
    },
    servers: [
      {
        url: "http://192.168.1.41:3002",
        description: "Zopio API Sunucusu"
      }
    ],
    paths: {
      "/cron/keep-alive": {
        get: {
          summary: "Keep-alive cron işlemi",
          description: "Veritabanı bağlantısını canlı tutmak için periyodik olarak çalışan endpoint",
          responses: {
            "200": {
              description: "İşlem başarılı",
              content: {
                "text/plain": {
                  schema: {
                    type: "string",
                    example: "OK"
                  }
                }
              }
            }
          }
        }
      }
      // Diğer API endpoint'lerinizi buraya ekleyebilirsiniz
    }
  };
}
