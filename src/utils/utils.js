export function placeValue(place) {
    switch(place) {
        case 'hundreds':
            return 100;
            break;
        case 'tens':
            return 10;
            break;
        case 'ones':
            return 1;
            break;
    }
}

export function placeTitle(place) {
    switch(place) {
        case 'hundreds':
            return '100s';
            break;
        case 'tens':
            return '10s';
            break;
        case 'ones':
            return '1s';
            break;
    }
}

export function markerValue(place, markers) {
    return placeValue(place) * markers;
}

export function totalValue(markers) {
    return  markers.hundreds * 100 + markers.tens * 10 + markers.ones;
}