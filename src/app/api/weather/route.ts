import { NextResponse } from 'next/server';
import { getAlushtaWeather } from '@/lib/weather';

export async function GET() {
  try {
    const weather = await getAlushtaWeather();
    return NextResponse.json(weather);
  } catch (error) {
    console.error('Weather API error:', error);
    return NextResponse.json(
      { airTemp: '+9°', seaTemp: '+15°' },
      { status: 500 }
    );
  }
}
