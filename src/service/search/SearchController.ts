import { getPlaces } from '../search/providers/OpenCageDataProvider'

export const getPlacesByName = async(q: string) => {
    if(q.length < 3) {
        return {
            type: "FeatureCollection",
            features: []
        }
    }

    return await getPlaces(q)
}
