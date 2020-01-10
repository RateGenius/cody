<?php declare(strict_types=1);

use HighScores\HighScoresList;
use PHPUnit\Framework\TestCase;

/**
 * Class HighScoresListTest
 *
 * @covers \HighScores\HighScoresList
 */
class HighScoresListTest extends TestCase
{
    public function test_that_a_high_scores_list_is_countable(): void
    {
        $highScores = new HighScoresList();

        $this->assertEquals(count($highScores), 0);
        $this->assertEquals($highScores->count(), 0);
    }

    public function test_that_a_high_scores_list_can_be_instantiated_from_an_array(): void
    {
        $highScores = new HighScoresList([100, 110, 120]);

        $this->assertInstanceOf(HighScoresList::class, $highScores);
        $this->assertEquals($highScores->count(), 3);
    }

    public function test_that_a_score_can_be_added_to_the_high_scores_list(): void
    {
        $highScores = new HighScoresList();
        $highScores->add(1000);

        $this->assertEquals($highScores->count(), 1);
    }

    public function test_that_a_high_scores_list_can_find_the_highest_score(): void
    {
        $highScores = new HighScoresList([150, 140, 160, 130]);

        $this->assertEquals($highScores->highestScore(), 160);
    }

    public function test_that_a_high_scores_list_can_find_the_last_added_score(): void
    {
        $highScores = new HighScoresList();
        $highScores->add(250);
        $highScores->add(251);
        $highScores->add(252);
        $highScores->add(253);

        $this->assertEquals($highScores->lastAdded(), 253);
    }

    public function test_that_a_high_scores_list_can_find_the_top_three_scores(): void
    {
        $highScores = new HighScoresList([7, 3, 4, 9, 6, 3, 2]);

        $this->assertEquals($highScores->topThree(), [9, 7, 6]);
    }

    public function test_that_a_high_scores_list_can_find_the_top_five_scores(): void
    {
        $highScores = new HighScoresList([7, 3, 4, 9, 6, 3, 2, 10, 7]);

        $this->assertEquals($highScores->topFive(), [10, 9, 7, 7, 6]);
    }
}
