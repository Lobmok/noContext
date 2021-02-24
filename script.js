document.querySelector(".context-area-1").initContext({
    type: "context",
    menuItems: [
        {
            text: "Refresh",
            callback: () => console.log("Refresh")
        },
        {
            text: "Filter",
            callback: () => console.log("Filter")
        },
        {
            text: "Remove",
            callback: () => console.log("Remove")
        }
    ]
})

document.querySelector(".context-area-2").initContext({
    type: "context",
    menuItems: [
        {
            text: "This does nothing",
            callback: () => console.log("Nothing")
        },
        {
            text: "Try again",
            callback: () => console.log("I'm trying my best")
        },
        {
            text: "Test subject",
            callback: () => console.log("Testing123")
        }
    ]
})