action = function(host, port)

local robots = http.get(host, port, "/robots.txt")

if robots.status == 200 then

return "robots.txt status 200"

else

return "robots.txt status: " .. robots.status

end

end
