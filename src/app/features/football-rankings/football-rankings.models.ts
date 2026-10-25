export type RankingScope = 'league' | 'general';

export type RankingType =
  | 'first_team_to_score'
  | 'winner'
  | 'btts'
  | 'over_1_5_goals'
  | 'shots_match'
  | 'shots_team'
  | 'shots_player'
  | 'shots_on_target_match'
  | 'shots_on_target_team'
  | 'shots_on_target_player'
  | 'corners_match'
  | 'corners_team'
  | 'corners_handicap'
  | 'corners_most'
  | 'league_main_selections'
  | 'overall_high_confidence';

export interface RankingRow {
  position: number;
  league: string;
  event_id: number;
  home_team: string;
  away_team: string;
  kickoff: string | null;
  match_status: string;
  market: string;
  period: string;
  selection: string | null;
  line: number | null;
  team: 'home' | 'away' | null;
  player_id: string | null;
  player: string | null;
  estimate_status: 'estimated' | 'not_estimated';
  probability: number | null;
  confidence: number | null;
  no_estimate_reason: string | null;
  rationale: string | null;
  risk: string | null;
  expected_value: number | null;
  expected_value_unit: string | null;
  prediction_id: string | null;
  version_id: string | null;
}

export interface StoredFootballRanking {
  document_id: string;
  ranking_id: string;
  version: number;
  version_id: string;
  is_current: boolean;
  supersedes_version_id: string | null;
  target_date: string;
  timezone: string;
  analyst: string;
  scope: RankingScope;
  competition: string | null;
  ranking_type: RankingType;
  sort_criterion: string;
  sort_direction: 'asc' | 'desc';
  analysis_prompt: { prompt_id: string; version: number; version_id: string };
  method_version: string;
  generated_at: string;
  received_at: string;
  rows: RankingRow[];
  coverage: {
    matches_considered: number | null;
    matches_with_rows: number | null;
    coverage_complete: boolean;
    limitations: string[];
  };
  idempotency_key: string;
}

export interface RankingListResponse {
  date: string;
  timezone: string;
  page: number;
  page_size: number;
  total: number;
  items: StoredFootballRanking[];
}

export interface RankingDetailResponse {
  ranking: StoredFootballRanking;
  current_version: number;
  total_versions: number;
  history_page: number;
  history_page_size: number;
  versions: StoredFootballRanking[];
}

export interface RankingPostResponse {
  received_at: string;
  total: number;
  created: number;
  replayed: number;
  rejected: number;
  items: Array<{
    status: 'created' | 'replayed' | 'rejected';
    ranking_id: string | null;
    version: number | null;
    version_id: string | null;
    idempotency_key: string;
    error: string | null;
  }>;
}
