export interface IPokemon {
    abilities: Array<object>,
    base_experience: number,
    cries: object
    forms: Array<object>,
    game_indices: Array<object>,
    height: number,
    held_items: [],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: Array<object>,
    name: string,
    order: number,
    past_abilities: [],
    past_types: [],
    species: object,
    sprites: {other: {home: {front_default: string}}},
    stats: Array<object>,
    types: [{slot: number, type: {name: string}}],
    weight: number
}