export class Bookmark {
    _id: string;
    name: string;
    location: string;
    description: string;
    category: string;
    tags: string[];
    tagsLine: string;

    constructor (name: string,
                 location: string,
                 category: string,
                 tags: string[],
                 description?: string,
                 tagsLine?: string){
        this.name = name;
        this.location = location;
        this.category = category;
        this.tags = tags;
        this.description = description;
        this.tagsLine = tagsLine;
    }
}
