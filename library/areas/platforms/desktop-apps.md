---
kind: library
shelf: platform
name: Desktop apps (macOS, Windows, cross-platform shells)
fits when: the product installs on a computer as an app: native for macOS or Windows, or a web codebase in a shell such as Electron or Tauri
related: areas/design-systems/apple-hig.md, areas/design-systems/fluent.md, areas/platforms/web-desktop.md, areas/patterns/command-palette-shortcuts.md, areas/practices/security-basics.md, areas/parts/files-storage.md
checked: 2026-11
---
# Desktop apps (macOS, Windows, cross-platform shells)

An app installed on a Mac or a Windows PC: windows, menus, files on disk, a keyboard and a pointer, and often hours of use a day. Teams choose between native frameworks (SwiftUI and AppKit on macOS, WinUI and others on Windows) and shells that wrap a web app (Electron, Tauri). The tension: **deep access to the computer versus the work of installing, signing, updating and earning trust** that a website does not need.

## Questions worth asking

- Why an app and not the website? Offline work, local files, background tasks, system integration, or being in the Dock and taskbar? The answer decides how much native work is worth it.
- macOS, Windows, Linux, or all of them? Each has its own conventions, signing and distribution.
- Native, Electron or Tauri? It decides app size, memory use, how "at home" it feels, and how much code is shared with the web.
- Store, direct download, or both? It changes signing, sandboxing, updates and payments.
- How does it update: automatically in the background, through a store, or by asking? Desktop users dislike surprise restarts and stale versions alike.
- What does it touch on the machine: files, folders, other apps, the network, the command line? Each needs permissions and a security story.
- Is it used in companies? Managed installs, proxies and admin rights become questions.

## Usual shape

### Conventions
- menu bar on macOS with the standard menus (app, File, Edit, View, Window, Help) · often · many commands live only there, and shortcuts follow from it
- title bar, toolbar and optional sidebar on Windows; command bars rather than a global menu · often · see Fluent
- standard shortcuts: copy, paste, undo, find, preferences, close window, quit · often · Cmd on macOS, Ctrl on Windows; people use them without thinking
- several windows, resizable, remembered between launches · often · and full screen or snapping on large monitors
- native open and save dialogs, drag and drop with the file manager · often
- right-click context menus · often
- settings in their own window (macOS) or page (Windows) · often
- tray or menu-bar icon for background apps · sometimes · sync clients, chat, utilities
- system notifications through the OS · sometimes · permission asked on macOS; settings per app on both
- launch at login, background helpers · sometimes · both systems ask the user or show it in settings
- light and dark appearance and the system accent colour · often
- one look across platforms in shell apps, with platform keyboard and window behaviour · sometimes · common in Electron products

### Store and review rules
- notarization for Mac apps distributed outside the Mac App Store · often · Gatekeeper warns or blocks unsigned, un-notarized downloads; needs a Developer ID certificate
- Mac App Store apps are sandboxed, update only through the store and use in-app purchase for digital goods · often · App Store Review Guidelines 2.4.5 and 3.1.1
- code signing on Windows · often · unsigned installers trigger SmartScreen warnings that scare people off
- Microsoft Store lists packaged and classic Win32 apps · sometimes · at the time of checking (2026-11), non-game apps may use their own or a third-party payment system for in-app purchases (Store Policy 10.8)
- privacy policy where the app handles personal data · often · Microsoft Store Policy 10.5; Mac App Store privacy details as on iOS
- auto-update through a framework or service (Sparkle, Squirrel, Tauri updater, store updates) · often · direct-download apps need their own

## Choices and trade-offs

- **Native or shell.** Native apps feel most at home, start fast and use less memory, but need a codebase per platform. Electron bundles a full browser engine, so it is consistent everywhere and heavy; Tauri uses the system web view, so it is much smaller and less uniform across systems, with a Rust core.
- **Store or direct download.** Stores handle payments, updates and trust, with sandboxing and review; direct downloads give freedom and full system access but need signing, notarization, an updater and a payment flow of your own. Many apps offer both.
- **One design or per-platform.** One design is cheaper and keeps the brand; following each platform's menus, shortcuts and window controls is what desktop users notice first. A middle path shares the content area and adapts the chrome.
- **Local-first or cloud-first.** Local files and offline work are what people often want from a desktop app; syncing them with the cloud adds conflicts (see offline and sync).

## Watch out

- Remote web content loaded with full system access in a shell app · one script injection becomes access to the whole machine; the Electron security checklist covers isolation and sandboxing
- Ctrl shortcuts shown on macOS, or Cmd ones on Windows · it signals a port and trips muscle memory
- An app that quits when its last window closes, or does not, against platform habit · macOS apps often stay running; Windows apps usually quit
- Updates that restart the app without asking · lost work and lost trust
- Unsigned builds handed to testers · warnings teach people to click through security dialogs, or they give up
- Ignoring the network and proxies of company machines · the app works at home and fails at work

## Go deeper

- [Designing for macOS, Human Interface Guidelines (Apple)](https://developer.apple.com/design/human-interface-guidelines/designing-for-macos) · menus, windows, toolbars and what Mac users expect
- [Design Windows apps (Microsoft Learn)](https://learn.microsoft.com/en-us/windows/apps/design/) · layout, navigation, title bars, commanding and Fluent for Windows
- [Electron security checklist](https://www.electronjs.org/docs/latest/tutorial/security) · isolation, sandboxing and content security for shell apps
- [Tauri documentation](https://v2.tauri.app/start/) · the system-web-view approach, its architecture and platforms
- [Notarizing macOS software before distribution (Apple)](https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution) · what direct-download Mac apps need for Gatekeeper
- [Microsoft Store Policies](https://learn.microsoft.com/en-us/windows/apps/publish/store-policies) · what the Store accepts, payments and privacy

## Related

- `areas/design-systems/apple-hig.md` · macOS components and type
- `areas/design-systems/fluent.md` · Windows components and materials
- `areas/platforms/web-desktop.md` · when a browser tab is enough
- `areas/patterns/command-palette-shortcuts.md` · keyboard-first desktop work
- `areas/practices/security-basics.md` · signing, updates and local access
- `areas/parts/files-storage.md` · local files, sync and storage
