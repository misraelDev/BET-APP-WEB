export interface BasketballMarket { handicap_team: string | null; handicap_line: number | null; handicap_confidence: number | null; total_line: number | null; total_pick: string | null; projected_total: number | null; total_confidence: number | null; }
export interface BasketballPrediction { game_id: number; kickoff: string; league: string; home_team: string; away_team: string; predicted_result: 'home' | 'away'; probabilities: { home: number; away: number }; markets: BasketballMarket | null; }
export interface BasketballResponse { games_found: number; games_returned: number; predictions: BasketballPrediction[]; persistence: { inserted: number; updated: number } | null; }
export interface StoredBasketballPrediction { document_id: string; prediction: BasketballPrediction; settlement: BasketballSettlement | null; }
export interface BasketballSettlement { home_score: number; away_score: number; net_units: number; markets: Record<'winner' | 'handicap' | 'total', { outcome: 'won' | 'lost' | 'push' | null; units: number | null }> }
export interface BasketballUpdateResponse { league: BasketballLeague; official_games: number; final_games: number; predictions_matched: number; predictions_updated: number; }
export type BasketballLeague = 'all' | 'nba' | 'wnba' | 'summer_league';
