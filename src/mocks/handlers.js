import { http, HttpResponse } from 'msw';
import hotels from '../data/hotels.json';

export const handlers = [
  http.get('*/api/hotels', ({ request }) => {
    const url = new URL(request.url);
    const country = url.searchParams.get('country');

    if (country) {
      const filtered = hotels.filter(
        (h) => h.country?.toLowerCase() === country.toLowerCase()
      );
      return HttpResponse.json(filtered, { status: 200 });
    }

    return HttpResponse.json(hotels, { status: 200 });
  }),

  http.get('*/api/hotels/:id', ({ params }) => {
    const { id } = params;
    const hotel = hotels.find((h) => String(h.id) === String(id));

    if (!hotel) {
      return HttpResponse.json({ message: 'Hotel not found' }, { status: 404 });
    }

    return HttpResponse.json(hotel, { status: 200 });
  }),
];