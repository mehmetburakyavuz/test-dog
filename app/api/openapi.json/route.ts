import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * OpenAPI JSON dosyasını sunan endpoint
 * Bu endpoint, openapi.json dosyasını HTTP üzerinden erişilebilir hale getirir
 */
export async function GET() {
  try {
    // OpenAPI JSON dosyasının yolunu belirle
    const openApiFilePath = path.resolve(process.cwd(), 'openapi.json');
    
    // Dosyanın var olup olmadığını kontrol et
    if (!fs.existsSync(openApiFilePath)) {
      return NextResponse.json(
        { error: 'OpenAPI tanım dosyası bulunamadı' },
        { status: 404 }
      );
    }
    
    // Dosyayı oku
    const openApiContent = fs.readFileSync(openApiFilePath, 'utf8');
    const openApiJson = JSON.parse(openApiContent);
    
    // JSON olarak döndür ve CORS başlıklarını ekle
    return NextResponse.json(openApiJson, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('OpenAPI dosyası sunulurken hata:', error);
    return NextResponse.json(
      { error: 'OpenAPI tanımı sunulurken bir hata oluştu' },
      { status: 500 }
    );
  }
}
