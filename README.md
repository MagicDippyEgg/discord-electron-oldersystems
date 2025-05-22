# Discord Client for Older Systems

This project provides a dedicated Discord client for systems that may no longer fully support the official Discord application, such as Windows 7, Windows 8, and other older operating systems. It aims to offer a familiar Discord experience by utilizing the `app.discord.com` web interface within a standalone desktop application.

## Features

* Dedicated desktop window for Discord.
* Uses `app.discord.com` for the core experience.
* Automated builds for 32-bit and 64-bit Windows executables via GitHub Actions.

## Installation

You can find the latest releases (including `.exe` installers and `.zip` portable versions) on the [Releases page](https://github.com/MagicDippyEgg/discord-electron-oldersystems/releases) of this repository.

1.  Go to the [Releases page](https://github.com/MagicDippyEgg/discord-electron-oldersystems/releases).
2.  Download the latest `Discord Setup X.X.X.exe` for a standard installer, or the `Discord-Wrapper-win.zip` for a portable version.
3.  Run the installer or extract the zip file to your desired location.


## Important Notes

Please be aware of the following behaviors and limitations:

* **Login Data Sharing:** This Discord client shares its login data (cookies, session information) with the official Discord desktop application. This means if you are logged in on both, logging out of one will also log you out of the other. Additionally, running both simultaneously might sometimes prevent this custom client from saving your login session correctly.
* **Camera and Screen Sharing:** At present, camera and screen sharing functionalities within this client will not not work. We are looking into improving this in future updates.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements!
