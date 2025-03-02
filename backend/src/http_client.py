from aiohttp import ClientSession

class HttpClient:
    def __init__(self, base_url: str, api_key: str):
        self.session = ClientSession(
            base_url=base_url,
            headers={
                'X-CMC_PRO_API_KEY': api_key,
            }
        )

class CMCHTTPClient(HttpClient):

    async def get_listings(self):
        async with self.session.get('/v1/cryptocurrency/listings/latest') as resp:
            result = await resp.json()
            return result.get("data", [])

    async def get_currency(self, currency_id: int):
        async with self.session.get('/v2/cryptocurrency/quotes/latest', params={'id': currency_id}) as resp:
            result = await resp.json()
            return result.get("data", {}).get(str(currency_id), {})
