# Setting up
Het op zetten van de linux omgeving in windows powerhell
## Key-terms
VM - **Virtual Machine** is een omgeving om een OS binnen je OS te runnen waar je kan expirimenteren of een totaal andere OS in wilt runnen zoals MacOS of Linux.

CLI - **Command Line Interface**. Is een omgeving waar je alleen commands in kunt voeren om de os in te besturen.

Powershell - Powershell word voornamelijk gebruikt voor het automatiseren en beheren van systemen. het word ook gebruikt om te bouwen, testen en oplossingen te maken. daarnaast heeft het een moderne command line

GUI - **Graphical User Interface**. Ipv een CLI waar je alleen command lines kan invullen is dit meer visueel ingesteld waar iconen en audio hebt voor een *betere* ervaring.

SSH - **Secure Socket Shell** is een netwerk protocol dat users en voornamelijk admins een veilige manier geven om een remote toegang te krijgen op een computer via een open netwerk.
## Opdracht
### Gebruikte bronnen
[SSH opstarten](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui)

[connecten van mijn Linux Omgeving](https://www.linode.com/docs/guides/connect-to-server-over-ssh-on-windows/)

[Powershell](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.3) 

[SSH info](https://www.techtarget.com/searchsecurity/definition/Secure-Shell) 

### Ervaren problemen
Het connecten van mijn linux omgeving was wel een uitdaging. waarbij mijn peers me uiteindelijk heben geholpen. Ik moet dus beter worden met antwoorden zoeken.

### Resultaat
- **het installeren van de SSH client en SSH server in settings>apps>optional features.**

![Settings](/00_includes/Settings.png)

- **Het Connecten van mijn SSH-connectie naar mijn VM.**

![connection](/00_includes/Powershell-login.png)

- **het laten zien van mijn username door gebruik te maken van de command whoami**

![username](/00_includes/connectionSSH.png)