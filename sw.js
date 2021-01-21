self.addEventListener("push", () => {
  self.registertration.sendNotification("test message", {});
});
