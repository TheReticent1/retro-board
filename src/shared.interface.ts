export interface MemberDto {
    name: string,
    position?: string,
    likes: number[],
}

export interface CharacterDto {
    selected: boolean,
    id: number,
    actor: string,
    role: string,
}