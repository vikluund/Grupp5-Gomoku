# Grupp5-Gomoku

## Sekvens diagram

Plugin: Markdown Preview Mermaid Support

Länk till dokumentation: https://mermaid.js.org/syntax/sequenceDiagram.html

#### GET request with fetch

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Click in list
    Note over User,Browser: List of diffrent games
    Browser->>Server: GET create/game
    Server->>Browser: JSON gameboard


```

#### LocalStorage

```mermaid
sequenceDiagram

    participant Server
    participant LocalStorage
    participant Browser

   Server->>LocalStorage: Create name and id
   Server->>LocalStorage: setItem(name) and setItem(id)

   LocalStorage->>Browser: getItem(name) and getItem(id)
   LocalStorage->>Browser: console.log(id) and console.log(name)

```
