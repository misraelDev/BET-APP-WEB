export type TennisTour = 'all' | 'atp' | 'wta';
export type TennisMarketKey = 'winner' | 'set_handicap' | 'total_games' | 'exact_sets';

export interface TennisMatchCountResponse {
  date: string;
  tour: TennisTour;
  matches_found: number;
}

export interface TennisMarket {
  selection: string | null;
  line: number | null;
  probability: number | null;
  projected_total: number | null;
  available: boolean;
  reason: string | null;
}

export interface TennisPrediction {
  match_id: number;
  kickoff: string;
  league: string;
  tour: string;
  tournament: string;
  round: string | null;
  player_one: string;
  player_two: string;
  data_quality_score: number;
  confidence: number;
  probabilities: { player_one: number; player_two: number };
  predicted_winner: string;
  markets: Record<TennisMarketKey, TennisMarket>;
  warnings: string[];
}

export interface TennisPredictionResponse {
  requested_date: string;
  matches_found: number;
  matches_returned: number;
  page: number;
  page_size: number;
  total_pages: number;
  model_version: string;
  filters: { tour: string };
  predictions: TennisPrediction[];
  warnings: string[];
  persistence: { inserted: number; updated: number; error: string | null } | null;
}

export interface StoredTennisPrediction {
  document_id: string;
  event_id: number;
  requested_date: string;
  generated_at: string;
  updated_at: string;
  prediction: TennisPrediction;
  settlement: TennisSettlement | null;
}

export interface TennisSettlement {
  winner: string;
  actual_games: number;
  actual_sets: string;
  net_units: number;
  markets: Record<TennisMarketKey, { outcome: 'won' | 'lost' | 'push' | null; units: number | null }>;
}

export interface TennisUpdateResponse {
  date: string; tour: string; official_matches: number; final_matches: number;
  predictions_matched: number; predictions_updated: number;
}
