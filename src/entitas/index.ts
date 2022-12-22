export class FilesEntitas {
    uuid: number;
    title: string;
    extension: string;
    size: number;
    file: string;
    date: string;

    constructor(
        uuid: number,
        title: string,
        extension: string,
        size: number,
        file: string,
        date: string
    ) {
        this.uuid = uuid;
        this.title = title;
        this.extension = extension;
        this.size = size;
        this.file = file;
        this.date = date;
    }
}

export class ActionEntitas {
    type: string;
    payload: FilesEntitas;

    constructor(type: string, payload: FilesEntitas) {
        this.type = type;
        this.payload = payload;
    }
}