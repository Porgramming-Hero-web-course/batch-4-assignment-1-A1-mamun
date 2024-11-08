{
  //

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    // Use the spread operator to create a new object with updated properties
    return { ...profile, ...updates };
  }

  // Sample input and usage
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
