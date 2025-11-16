--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
-- Lua Library inline imports
local function __TS__ArrayIncludes(self, searchElement, fromIndex)
    if fromIndex == nil then
        fromIndex = 0
    end
    local len = #self
    local k = fromIndex
    if fromIndex < 0 then
        k = len + fromIndex
    end
    if k < 0 then
        k = 0
    end
    for i = k + 1, len do
        if self[i] == searchElement then
            return true
        end
    end
    return false
end
-- End of Lua Library inline imports
local ____exports = {}
local event = require("event")
local ____term = require("term")
local clear = ____term.clear
local doorController = component.os_doorcontroller
local CODE = "2011"
local ADMIN_CODE = "1488"
local PLAYER_NAME_LIST = {"AlexGay"}
local ADMIN_NAME_LIST = {"ITPopa"}
local SLEEP_TIME = 3
local CLEAR_SLEEP_TIME = 0.5
local EVENT_NAME = "magData"
print("ЗАПУСК СИСТЕМЫ КОНТРОЛЯ ДОСТУПА ПРОИЗВЕДЁН")
while true do
    local data = {event.pull(EVENT_NAME)}
    if __TS__ArrayIncludes(PLAYER_NAME_LIST, data[3]) and data[4] == CODE then
        print(("Приветствуем уважаемый " .. data[3]) .. "! Доступ разрешён.")
        doorController.open()
        os.sleep(SLEEP_TIME)
        doorController.close()
        print("Время истекло, дверь закрыта.")
        os.sleep(CLEAR_SLEEP_TIME)
        clear()
    elseif __TS__ArrayIncludes(ADMIN_NAME_LIST, data[3]) and data[4] == ADMIN_CODE then
        print(("Приветствуем админа " .. data[3]) .. "! Консоль доступа открыта.")
        print("Введите пожалуйста имя пользователя. Учитываейте, что в качестве имени пользователя будет ник игрока")
        print("Также стоит помнить, что мало добавить пользователя в белый список, нужно ещё знать код доступа")
        print("Введите имя пользователя:")
        local userName = io.read()
        print("Введите код доступа: ")
        local code = io.read()
        if code == ADMIN_CODE then
            if userName ~= "" and userName ~= nil and not __TS__ArrayIncludes(PLAYER_NAME_LIST, userName) then
                PLAYER_NAME_LIST[#PLAYER_NAME_LIST + 1] = userName
                print(("Пользователь " .. userName) .. " успешно добавлен в белый список.")
                os.sleep(CLEAR_SLEEP_TIME)
                clear()
            else
                print("ВОЗНИКЛА ОШИБКА ПРИ ДОБАВЛЕНИИ ПОЛЬЗОВАТЕЛЯ В БЕЛЫЙ СПИСОК")
                os.sleep(CLEAR_SLEEP_TIME)
                clear()
            end
        else
            print("НЕВЕРНЫЙ КОД ДОСТУПА")
            os.sleep(CLEAR_SLEEP_TIME)
            clear()
        end
    else
        print("НЕВЕРНЫЙ ПОЛЬЗОВАТЕЛЬ: " .. data[3])
        os.sleep(CLEAR_SLEEP_TIME)
        clear()
    end
end
return ____exports
