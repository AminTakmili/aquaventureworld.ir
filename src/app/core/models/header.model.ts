export interface headerMenu {
    id: number;
    attr: string;
    classes: string;
    description: string;
    object: string;
    object_id: number;
    object_slug: string;
    order: number;
    parent: number;
    target: string;
    title: string;
    type: string;
    type_label: string;
    url: string;
    xfn: string;
}
export interface MenuResposne<D> {
    ID: number;
    count: number;
    items: D;
    name: string;
    slug: string;
}

export interface Tatorial{
    name:string;
    url:string
}
