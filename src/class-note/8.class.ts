namespace TsClass {
    class Person {
        public age: number;
        protected role: string
        private readonly name: string;
        readonly readOnlyField: string


        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        public getRole(): string {
            return this.role
        }

        public print() {
            console.log('aaa')
        }
    }
}