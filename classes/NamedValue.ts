export default class NamedValue<T>{
    private _value: T | undefined;

    constructor(private name: string){}

    public setValue(value: T): void {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}