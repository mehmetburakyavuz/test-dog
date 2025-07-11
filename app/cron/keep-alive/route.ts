import { exportApiToApidog } from '../../utils/apidog-integration';


const APIDOG_SYNC_ENABLED="true"
const APIDOG_PROJECT_ID="997610"
const APIDOG_API_KEY="APS-RiiW33MoF59MVOkAmAt0KY1U0CTDEyng"
/**
 * Keep-alive cron işlemi ve opsiyonel olarak Apidog API entegrasyonu
 * Bu endpoint veritabanı bağlantısını canlı tutmak için periyodik olarak çalışır
 * Ayrıca, APIDOG_SYNC_ENABLED çevre değişkeni true olarak ayarlanmışsa
 * API dokümantasyonunu Apidog'a gönderir
 */
export const GET = async () => {

  try {
    // APIDOG_SYNC_ENABLED çevre değişkeni true ise API dokümantasyonunu Apidog'a gönder
    if (APIDOG_SYNC_ENABLED === 'true') {
      const projectId = APIDOG_PROJECT_ID || 'YOUR_PROJECT_ID'; // Buraya Apidog proje ID'nizi ekleyin
      const apiKey = APIDOG_API_KEY || 'YOUR_API_KEY'; // Buraya Apidog API anahtarınızı ekleyin
      
      // Apidog'a gönder
      await exportApiToApidog(projectId, apiKey);
      console.log('API dokümantasyonu Apidog\'a başarıyla gönderildi');
    }
  } catch (error) {
    // Apidog entegrasyonu başarısız olsa bile ana işlevi etkilememesi için hata yakalama
    console.error('Apidog entegrasyonu hatası:', error);
  }

  return new Response('OK', { status: 200 });
};
