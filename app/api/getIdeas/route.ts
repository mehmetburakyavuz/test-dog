import { NextResponse } from 'next/server';


export async function GET() {
  try {
    // OpenAPI JSON dosyasının yolunu belirle
    const greetings = "merhaba seni selamlıyorum";
    
    if (greetings) {
      return NextResponse.json(
        { message: 'Selamlamamı yaptım.' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('OpenAPI dosyası sunulurken hata:', error);
    return NextResponse.json(
      { error: 'OpenAPI tanımı sunulurken bir hata oluştu' },
      { status: 500 }
    );
  }
}
