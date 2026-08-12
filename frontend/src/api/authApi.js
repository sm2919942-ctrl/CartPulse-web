const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8080";

export async function signupUser(userData) {

  try {

    const response = await fetch(
      `${API_URL}/api/auth/signup`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(userData)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Signup failed"
      );
    }

    return {
      ...data,
      demoMode: false
    };

  } catch (error) {

    console.log(
      "Backend unavailable. Using demo signup."
    );

    const users =
      JSON.parse(
        localStorage.getItem(
          "cartpulseUsers"
        )
      ) || [];

    const existingUser =
      users.find(
        (user) =>
          user.email === userData.email
      );

    if (existingUser) {
      throw new Error(
        "Account already exists"
      );
    }

    const newUser = {
      id: Date.now(),
      ...userData
    };

    localStorage.setItem(
      "cartpulseUsers",
      JSON.stringify([
        ...users,
        newUser
      ])
    );

    return {
      message:
        "Account created successfully",
      user: newUser,
      demoMode: true
    };
  }
}
export async function loginUser(
  email,
  password
) {

  try {

    const response = await fetch(
      `${API_URL}/api/auth/login`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email,
          password
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Login failed"
      );
    }

    return {
      ...data,
      demoMode: false
    };

  } catch (error) {

    console.log(
      "Backend unavailable. Using demo login."
    );

    const users =
      JSON.parse(
        localStorage.getItem(
          "cartpulseUsers"
        )
      ) || [];

    const user =
      users.find(
        (item) =>
          item.email === email &&
          item.password === password
      );

    if (!user) {
      throw new Error(
        "Invalid email or password"
      );
    }

    return {
      message: "Login successful",
      user,
      demoMode: true
    };
  }
}