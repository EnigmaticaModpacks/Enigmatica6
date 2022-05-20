<?php

namespace App\Patchouli;

use Generator;
use Illuminate\Support\Collection;

class Page
{
    /**
     * @var Collection
     */
    static $whitelist;

    /**
     * @var Collection
     */
    static $blacklist;

    public function __construct()
    {
        self::$whitelist = new Collection();
        self::$blacklist = new Collection(array_flip([
            'text', 'patchouli:text',
            'image', 'patchouli:image',
            'spotlight', 'patchouli:spotlight',
            'multiblock',
            'relations', 'patchouli:relations',
            'entity', 'patchouli:entity',
            'link',
            'smelting', 'patchouli:smelting',

            'supplementaries:spotlight_4',
            'supplementaries:spotlight_2_no_link',
            'supplementaries:spotlight_2',
            'supplementaries:smithing_duple',
            'supplementaries:spotlight_5',
            'supplementaries:custom_crafting', // this has an embedded recipe without an id
            'supplementaries:spotlight_3',
            'supplementaries:smithing_one',
            'supplementaries:sum', 'supplementaries:sum_partial_no_link',

            'bloodmagic:living_armour_upgrade_table',
            'bloodmagic:ritual_info',
            'bloodmagic:ritual_data',

            'empty',

            'resourcefulbees:animated_image',
            'resourcefulbees:effect',
            'resourcefulbees:potion_recipe',
            'resourcefulbees:item_link',
            'resourcefulbees:geo_bee',

            // thermal
            '2_item_page',
            '3-3_alloy_page',
            '5_item_page',
            '3_alloy_page',
            'catalyst_page',
            '2-2_item_page',
            '3_item_page',
            '1-1_item_page',
            '1_item_page',
            '2-1_item_page',

            // botanis
            'quest',
            'botania:lore_page',
            'reactive_enchant_first',
            'reactive_enchant_upgrade',
            'trade_description',
        ]));

        // one key called `recipe`
        $default = fn(Collection $page) => yield $page->get('recipe');

        self::$whitelist->put('crafting', function (Collection $page) {
            if($page->has('recipe')) yield $page->get('recipe');
            if($page->has('recipe2')) yield $page->get('recipe2');
        });
        self::$whitelist->put('patchouli:crafting', self::$whitelist->get('crafting'));

        self::$whitelist->put('naturesaura:tree_ritual',    $default);
        self::$whitelist->put('naturesaura:altar',          $default);
        self::$whitelist->put('naturesaura:offering',       $default);
        self::$whitelist->put('naturesaura:animal_spawner', $default);

        self::$whitelist->put('pneumaticcraft:thermo_plant',     $default);
        self::$whitelist->put('pneumaticcraft:assembly_system',  $default);
        self::$whitelist->put('pneumaticcraft:pressure_chamber', $default);
        self::$whitelist->put('pneumaticcraft:amadron_trade',    $default);

        // ars arsenal
        self::$whitelist->put('apparatus_recipe', $default);

        // blood magic
        $bloodmagic_2x = function (Collection $page) {
            yield $page->get('a.recipe');
            yield $page->get('b.recipe');
        };
        $bloodmagic_3x = function (Collection $page) {
            yield $page->get('a.recipe');
            yield $page->get('b.recipe');
            yield $page->get('c.recipe');
        };
        self::$whitelist->put('crafting_2-step_sigil', function (Collection $page) {
            yield $page->get('array.recipe');
            yield $page->get('alchemy_table.recipe');
        });
        self::$whitelist->put('crafting_array', $default);
        self::$whitelist->put('crafting_alchemy_table', $default);
        self::$whitelist->put('2x_functional_array', function (Collection $page) {
            yield $page->get('a.recipe'); // e.g. day
            yield $page->get('b.recipe'); // e.g. night
        });
        self::$whitelist->put('functional_array', $default);
        self::$whitelist->put('bloodmagic:crafting_upgrade_alchemy_table', fn(Collection $page) => yield $page->get('a.recipe'));
        self::$whitelist->put('bloodmagic:crafting_upgrade_array', fn(Collection $page) => yield $page->get('a.recipe'));
        self::$whitelist->put('bloodmagic:crafting_soulforge', $default);
        self::$whitelist->put('crafting_altar', $default);
        self::$whitelist->put('crafting_soulforge', $default);
        self::$whitelist->put('3x_crafting_soulforge', $bloodmagic_3x);
        self::$whitelist->put('2x_crafting_alchemy_table', $bloodmagic_2x);
        self::$whitelist->put('2x_crafting_soulforge', $bloodmagic_2x);
        self::$whitelist->put('3x_crafting_alchemy_table', $bloodmagic_3x);
        self::$whitelist->put('2x_crafting_altar', $bloodmagic_2x);
        self::$whitelist->put('3x_crafting_arc', $bloodmagic_3x);
        self::$whitelist->put('2x_crafting_arc', $bloodmagic_2x);
        self::$whitelist->put('crafting_arc', $default);

        self::$whitelist->put('thermal:double_crafting_page', function (Collection $page) {
            if($page->has('A.recipe')) yield $page->get('A.recipe');
            if($page->has('B.recipe')) yield $page->get('B.recipe');
        });

        // ars noveau
        self::$whitelist->put('glyph_recipe', $default);
        self::$whitelist->put('enchanting_recipe', $default);

        self::$whitelist->put('botania:runic_altar', $default);
        self::$whitelist->put('botania:mana_infusion', function (Collection $page) {
            if (is_array($page->get('recipes'))) {
                yield from $page->get('recipes');
            } else if (is_string($page->get('recipes'))) {
                yield $page->get('recipes');
            }
        });
        self::$whitelist->put('botania:petal_apothecary', $default);
        self::$whitelist->put('botania:terrasteel', $default);
        self::$whitelist->put('botania:elven_trade', self::$whitelist->get('botania:mana_infusion'));
        self::$whitelist->put('botania:brew', $default);
        self::$whitelist->put('botania:crafting_multi', fn(Collection $page) => yield from $page->get('recipes'));

        self::$whitelist->put('ars_enderstorage:double_glyph_recipe', function (Collection $page) {
            if($page->has('recipe1')) yield $page->get('recipe1');
            if($page->has('recipe2')) yield $page->get('recipe2');
        });
        self::$whitelist->put('ars_enderstorage:glyph_recipe', $default);

        self::$whitelist->put('occultism:ritual', $default);

        self::$whitelist->put('mythicbotany:infuser', $default);
        self::$whitelist->put('mythicbotany:ritual_pattern', $default);
        self::$whitelist->put('mythicbotany:ritual_info', $default);
    }

    public function recipes(Collection $page): Generator {
        if (self::$blacklist->has($page->get('type'))) {
            yield from [];
        } else if (self::$whitelist->has($page->get('type'))) {
            yield from self::$whitelist->get($page->get('type'))($page);
        } else {
            dd($page);
        }
    }
}
