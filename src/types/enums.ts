enum UserRole {
  Admin = 'admin',
  User = 'user',
  DemoAdmin = 'demo-admin',
  DemoUser = 'demo-user',
}

enum GroupType {
  Solo = 'Solo',
  Couple = 'Couple',
  Family = 'Family',
  Friends = 'Friends',
  Business = 'Business',
}

enum TravelStyle {
  Relaxed = 'Relaxed',
  Adventure = 'Adventure',
  Culture = 'Culture',
  Luxury = 'Luxury',
  Nature = 'Nature & Outdoors',
  City = 'City Exploration',
}

enum Interests {
  Food = 'Food & Culinary',
  Hiking = 'Hiking & Nature Walks',
  History = 'Historical Sites',
  Museums = 'Museums & Art',
  Beaches = 'Beaches & Water Activities',
  Nightlife = 'Nightlife & Bars',
  Photography = 'Photography Spots',
  Shopping = 'Shopping',
  Local = 'Local Experiences',
}

enum BudgetEstimate {
  Budget = 'Budget',
  MidRange = 'Mid-Range',
  Premium = 'Premium',
  Luxury = 'Luxury',
}

export { UserRole, GroupType, TravelStyle, Interests, BudgetEstimate };
