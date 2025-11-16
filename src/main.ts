import * as event from "event"
import {clear} from "term"

let doorController = component.os_doorcontroller

const CODE = "2011"
const ADMIN_CODE = "1488"
let PLAYER_NAME_LIST = ["AlexGay"]
const ADMIN_NAME_LIST = ["ITPopa"]
const SLEEP_TIME = 3
const CLEAR_SLEEP_TIME = 0.5
const EVENT_NAME = "magData"

print("ЗАПУСК СИСТЕМЫ КОНТРОЛЯ ДОСТУПА ПРОИЗВЕДЁН")
while (true) {
    let data = event.pull(EVENT_NAME)
    if (PLAYER_NAME_LIST.includes(data[2]) && data[3] == CODE) {
        print(`Приветствуем уважаемый ${data[2]}! Доступ разрешён.`)
        doorController.open()
        os.sleep(SLEEP_TIME)
        doorController.close()
        print("Время истекло, дверь закрыта.")
        os.sleep(CLEAR_SLEEP_TIME)
        clear()
    } else if(ADMIN_NAME_LIST.includes(data[2]) && data[3] == ADMIN_CODE) {
        print(`Приветствуем админа ${data[2]}! Консоль доступа открыта.`)
        print("Введите пожалуйста имя пользователя. Учитываейте, что в качестве имени пользователя будет ник игрока")
        print("Также стоит помнить, что мало добавить пользователя в белый список, нужно ещё знать код доступа")
        print("Введите имя пользователя:")
        let userName = io.read()
        print("Введите код доступа: ")
        let code = io.read()
        if (code == ADMIN_CODE) {
            if (userName != "" && userName != null && !PLAYER_NAME_LIST.includes(userName)) {
                PLAYER_NAME_LIST.push(userName)
                print(`Пользователь ${userName} успешно добавлен в белый список.`)
                os.sleep(CLEAR_SLEEP_TIME)
                clear()
            } else {
                print("ВОЗНИКЛА ОШИБКА ПРИ ДОБАВЛЕНИИ ПОЛЬЗОВАТЕЛЯ В БЕЛЫЙ СПИСОК")
                os.sleep(CLEAR_SLEEP_TIME)
                clear()
            }
        } else {
            print("НЕВЕРНЫЙ КОД ДОСТУПА")
            os.sleep(CLEAR_SLEEP_TIME)
            clear()
        }
        
    } else {
        print("НЕВЕРНЫЙ ПОЛЬЗОВАТЕЛЬ: " + data[2])
        os.sleep(CLEAR_SLEEP_TIME)
        clear()
    }
}