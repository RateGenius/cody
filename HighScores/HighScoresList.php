<?php declare(strict_types=1);

namespace HighScores;

use Countable;

/**
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive
 * games of all time, and a classic of the arcade era.
 */
class HighScoresList implements Countable
{
    /**
     * @var array
     */
    protected $list;

    /**
     * HighScoresList constructor.
     *
     * @param array $scores
     */
    public function __construct(array $scores = [])
    {
        foreach ($scores as $score) {
            $this->add($score);
        }
    }

    /**
     * Adds a score to the HighScoresList.
     *
     * @param array $score
     *
     * @return void
     */
    public function add($score): void
    {
        // TODO
    }

    public function count()
    {
        return count($this->list);
    }

    /**
     * Returns the highest score.
     *
     * @return int
     */
    public function highestScore(): int
    {
        // TODO

        return 0;
    }

    /**
     * Returns the most recently added score.
     *
     * @return int
     */
    public function lastAdded(): int
    {
        // TODO

        return 0;
    }

    /**
     * Returns an array containing the top three scores, beginning with the highest.
     *
     * @return array
     */
    public function topThree(): array
    {
        // TODO

        return [];
    }

    /**
     * Returns an array containing the top five scores, beginning with the highest.
     *
     * @return array
     */
    public function topFive(): array
    {
        // TODO

        return [];
    }
}
