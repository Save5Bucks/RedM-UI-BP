local test = false

Citizen.CreateThread(
    function()
        for i=0, 1,1 do
            if i==0 then
                test = true
            end
            if test == true then
                SetNuiFocus(true,true)
            end
        end
    end
)