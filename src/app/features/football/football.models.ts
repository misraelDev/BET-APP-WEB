export interface FootballMarket {
  selection: string | null;
  line: number | null;
  probability: number | null;
  projected_total: number | null;
  available: boolean;
  reason: string | null;
}

export interface FootballPrediction {
  fixture_id: number;
  kickoff: string;
  league: string;
  home_team: string;
  away_team: string;
  probabilities: { home: number; draw: number; away: number };
  predicted_result: 'home' | 'draw' | 'away';
  confidence: number;
  markets: {
    handicap: FootballMarket;
    double_chance: FootballMarket;
    goals: FootballMarket;
    corners: FootballMarket;
    cards: FootballMarket;
  } | null;
}

export interface FootballPredictionResponse {
  requested_date: string;
  fixtures_found: number;
  fixtures_eligible: number;
  fixtures_returned: number;
  model_version: string;
  predictions: FootballPrediction[];
  warnings: string[];
  persistence: {
    inserted: number;
    updated: number;
    error: string | null;
  } | null;
}

export type FootballLeague = 'all' | 'liga_mx' | 'brasileirao';

export type FootballMarketKey = 'winner' | 'handicap' | 'double_chance' | 'goals' | 'corners' | 'cards';

export interface StoredFootballPrediction {
  document_id: string;
  event_id: number;
  requested_date: string;
  generated_at: string;
  updated_at: string;
  prediction: FootballPrediction;
  settlement: {
    home_score: number;
    away_score: number;
    net_units: number;
    markets: Record<FootballMarketKey, { outcome: 'won' | 'lost' | 'push' | null; units: number | null }>;
  } | null;
}

export interface FootballUpdateResponse {
  date: string;
  official_fixtures: number;
  final_fixtures: number;
  predictions_matched: number;
  predictions_updated: number;
}
