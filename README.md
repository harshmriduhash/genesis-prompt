# Genesis-Prompt

**Genesis-Prompt** is a Next.js website designed for users to share and discover the best AI prompts. It comes with authentication, user-friendly features for creating and managing prompts, and a sleek, modern UI that enhances the user experience.

## Screenshots
#### Home Page
![SecreenShot1](https://i.ibb.co/g6DYDMH/screenshot4.png)
#### Create Post Page
![SecreenShot1](https://i.ibb.co/B6dsjPc/screenshot2.png)

#### My Profile
![SecreenShot1](https://i.ibb.co/6Rrj2R5/screenshot3.png)



## Features

- **NextAuth Authentication**: Secure login via Google accounts using NextAuth.
- **Create, Edit, Delete Prompts**: Logged-in users can easily manage their AI prompts.
- **Search Functionality**: Search for prompts by username, tags, or specific keywords.
- **Copy Prompt**: One-click copy feature for quick usage of shared prompts.
- **Modern UI**: Clean, dark-themed interface for comfortable browsing.

## Installation

To run this project locally:

1. Clone the repository:

```bash
git clone https://github.com/AtulYadav25/genesis-prompt
```

2. Navigate to the project directory:

```
cd genesis-prompt
```

3. Install dependencies:
```
npm install
```

4. Set up environment variables by creating a .env file in the root directory:

```
GOOGLE_ID = "YOUR_GOOGLE_ID"
GOOGLE_CLIENT_SECRET = "YOUR_GOOGLE_CLIENT_SECRET"
MONGODB_URI = "YOUR_MONGODB_URI"

NEXTAUTH_URL = http://localhost:3000
NEXTAUTH_URL_INTERNAL = http://localhost:3000
NEXTAUTH_SECRET = "YOUR_SECRET"
```

5. Run the development server:
```
npm run dev

```

Your app will be running at ```http://localhost:3000.```

## Usage
1. **Sign in with Google** to start using the platform.
2. **Create new prompts** using the editor.
3. **Edit or delete** your prompts anytime.
4. Use the **search bar** to find prompts by username, tags, or keywords.
5. **Copy prompts** quickly with the copy button.


## Tech Stack
![Next JS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

![Mongo DB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Contribution

Feel free to submit issues or pull requests. Contributions are always welcome!

## Social Media

[![LinkedIn Profile](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://in.linkedin.com/in/harsh-bestmerndev)
