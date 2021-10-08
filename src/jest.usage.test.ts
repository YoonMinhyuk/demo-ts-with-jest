const mockFn = jest.fn();

beforeEach(() => {
    mockFn.mockClear()
})

describe('mock function', () => {
    test('mock function 호출 수 확인', () => {
        //given when
        mockFn()
        mockFn()
        mockFn()

        //then
        expect(mockFn.mock.calls.length).toEqual(3);
    })

    test('mock function 으로 전달된 params 확인', () => {
        //given when
        mockFn(1)
        mockFn(2, 3)
        mockFn(4, 5, 6, 7)

        //then
        const calls = mockFn.mock.calls;
        expect(calls.length).toEqual(3)
        expect(calls[0][0]).toEqual(1)
        expect(calls[1][0]).toEqual(2)
        expect(calls[1][1]).toEqual(3)
        expect(calls[2][0]).toEqual(4)
        expect(calls[2][1]).toEqual(5)
        expect(calls[2][2]).toEqual(6)
        expect(calls[2][3]).toEqual(7)
    })

    test('mock function return value 사용하기', () => {
        //given when
        mockFn.mockReturnValue(10)

        //then
        expect(mockFn()).toEqual(10)
    })
})