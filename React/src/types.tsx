export interface FolderType {
    "id": string | number,
    "name":string,
    "isFolder":boolean,
    "children" : FolderType[]
}