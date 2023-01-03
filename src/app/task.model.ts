export class Task {
    id: number;
    text: string;
    status: boolean;
    constructor(text: string) { 
        this.id = Date.now();
        this.text = text;
        this.status = false;
    }
  }