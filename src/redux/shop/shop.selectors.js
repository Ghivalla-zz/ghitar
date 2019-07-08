import {createSelector} from 'reselect';

const selectShop = state => state.shop;
export const selectGears= createSelector(
	[selectShop],
	shop => shop.gears
);
export const selectGear = gearUrlParam => 
createSelector(
	[selectGears],
	gears => gears[gearUrlParam]
)

export const selectGearsForPreview = createSelector(
	[selectGears],
	gears => Object.keys(gears).map(key=>gears[key])
)
