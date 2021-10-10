import {mocked} from "ts-jest/utils";
import SoundPlayerConsumer from './sound.player.consumer'
import {GG} from "./sound.player"

jest.mock('./sound.player')

const mockedGG = mocked(GG, true);

beforeEach(() => {
    mockedGG.SoundPlayer.mockClear()
})

test('Hmm', () => {
    const mock = jest.fn();
    mock.mockReturnValue("Really?")
    jest.spyOn(GG.SoundPlayer.prototype, "getName").mockImplementation(mock)

    // const mockedSoundPlayer = mocked(SoundPlayer, true);
    // mockedSoundPlayer.mockImplementation(() => {
    //     return {
    //         getName: () => "MOCK!!!!"
    //     }
    // })

    // mockedGG.SoundPlayer.mockImplementation(jest.fn().mockImplementation(()=> {
    //     return {
    //         getName: ()=> "is Right??"
    //     }
    // }))

    const soundPlayerConsumer = new SoundPlayerConsumer();
    soundPlayerConsumer.play()
})