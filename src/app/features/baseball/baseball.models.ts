export type BaseballLeague = 'all' | 'mlb' | 'kbo';

export interface BaseballPredictionRequest {
  date: string;
  timezone: string;
  limit: number;
  league: BaseballLeague;
}

export interface ProbabilitySet {
  home: number;
  away: number;
}

export interface BaseballMarkets {
  scope: 'full_game';
  handicap_team: string | null;
  handicap_line: number | null;
  handicap_confidence: number | null;
  total_line: number | null;
  total_pick: 'over' | 'under' | null;
  projected_total: number | null;
  total_confidence: number | null;
}

export interface BaseballGamePrediction {
  game_id: number;
  kickoff: string;
  league: string;
  season: string;
  home_team: string;
  away_team: string;
  data_quality_score: number;
  confidence: number;
  probabilities: ProbabilitySet;
  predicted_result: 'home' | 'away';
  expected_score_home: number | null;
  expected_score_away: number | null;
  markets: BaseballMarkets | null;
  available_components: string[];
  warnings: string[];
}

export interface PersistenceSummary {
  enabled: boolean;
  inserted: number;
  updated: number;
  collection: string | null;
  error: string | null;
}

export interface BaseballPredictionResponse {
  sport: string;
  requested_date: string;
  timezone: string;
  games_found: number;
  games_returned: number;
  model_version: string;
  weights: Record<string, number>;
  filters: Record<string, string>;
  predictions: BaseballGamePrediction[];
  warnings: string[];
  persistence: PersistenceSummary | null;
}

export interface BaseballResultsUpdateRequest {
  date: string;
  league: 'mlb' | 'kbo';
}

export interface BaseballResultsUpdateResponse {
  date: string;
  league: string;
  official_games: number;
  final_games: number;
  predictions_matched: number;
  predictions_updated: number;
  not_found: string[];
}

export interface StoredBaseballPrediction {
  document_id: string;
  event_id: number;
  requested_date: string;
  model_version: string;
  provider?: string;
  status: 'pending' | 'won' | 'lost' | 'push';
  settlement: {
    game_status: string;
    outcome: 'won' | 'lost' | 'push';
    actual_winner: 'home' | 'away' | 'push';
    home_score: number;
    away_score: number;
    handicap_outcome: 'won' | 'lost' | 'push' | null;
    total_outcome: 'won' | 'lost' | 'push' | null;
    moneyline_units?: number | null;
    handicap_units?: number | null;
    total_units?: number | null;
    net_units?: number;
    settled_at: string;
  } | null;
  timezone: string;
  prediction: BaseballGamePrediction;
  generated_at: string;
  updated_at: string;
}
