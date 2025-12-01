# Tourvisto Monorepo

This repository combines both the **Client** (formerly `Tourvisto-FrontEnd`) and **Server** (formerly `Tourvisto-BackEnd`) into a single monorepo.

## Structure

```
Tourvisto/
├── Client/          # React + TypeScript frontend
├── Server/          # .NET Core backend
└── README.md
```

## Setup

### Client
```bash
cd Client
npm install
npm run dev
```

### Server
```bash
cd Server
dotnet restore
dotnet run --project TourvistoAPI
```

## Important Notes

- Both `Client` and `Server` are now regular folders within this monorepo
- The `.git` folders from the original separate repositories have been removed
- All changes to either `Client` or `Server` will be tracked by this monorepo's Git repository

## Next Steps

If you want to preserve the full Git history from the original repositories:
1. Create this new repository on GitHub
2. Push this current state
3. Optionally: Import the historical commits from the original repos using `git subtree` or `git filter-repo`
