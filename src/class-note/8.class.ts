namespace TsClass {
    class Person {
        private readonly name: string;
        public age: number;
        protected role: string
        readonly readOnlyField: string


        constructor(
            name: string,
            age: number,
            role: string,
            readOnlyField: string
        ) {
            this.name = name
            this.age = age
            this.role = role
            this.readOnlyField = readOnlyField
        }

        public getRole(): string {
            return this.role
        }

        public print() {
            console.log('aaa')
        }
    }
}