import request from 'request-promise'
import * as Provider from './OpenCageDataProvider'

jest.mock('request-promise')

describe('OpenCageDataProvider', () => {
    test('an empty wuery string', async() => {
        (request as any).mockImplementation(() => '{"features": []}')
        const result = await Provider.getPlaces('Paris')
        expect(result).toEqual({ features: [] })
    })

    test('an invalid json response', async() => {
        (request as any).mockImplementation(() => "Service Unavailable.")
        await expect(Provider.getPlaces('Chamonix')).rejects.toThrow(SyntaxError)
    })
})
