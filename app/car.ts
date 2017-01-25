export class Car {
    constructor (
        public id: number,
        public brand: string,
        public model: string,
        public fuelType?: string,
        public bodyStyle?: string,
        public topSpeed?: number,
        public power?: number
    ){}
}