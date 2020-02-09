export class Humano {
  public page: number;
  public per_page: number;
  public total: number;
  public total_pages: number;
  public data: any[];
  setDataObject(entity: any) {
    this.page = entity["page"];
    this.per_page = entity["per_page"];
    this.total = entity["total"];
    this.total_pages = entity["total_pages"];
    this.data = entity["data"];
  }
}
