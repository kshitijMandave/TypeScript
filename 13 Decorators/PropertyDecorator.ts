function ReadOnly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  });
}

class User {
  @ReadOnly
  role = "Admin";
}

const u = new User();
u.role = "Guest"; // ❌ Error: Cannot assign to read-only property
