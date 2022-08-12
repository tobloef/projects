import classes from "./Parameters.module.css";
import Select, { StylesConfig } from "react-select";
import {
  useEffect,
  useState,
} from "react";
import chroma from "chroma-js";
import {
  Project,
  Tag,
  TagKey,
  Tags,
} from "../utils/projects";
import { SortFunc } from "../utils/types";
import { getTagStyle } from "../utils/getTagStyle";

type SortOption = {
  label: string,
  value: SortFunc<Project>,
};

const sortOptions: Array<SortOption> = [
  {
    label: "★ Featured",
    value: (a, b) => 0,
  },
  {
    label: "↑ Date (asc.)",
    value: (a, b) => 0,
  },
  {
    label: "↓ Date (desc.)",
    value: (a, b) => 0,
  },
];

type TagOption = {
  label: string,
  value: string,
  color: string,
};

const tagOptions: Array<TagOption> = Object.values(Tags).map((t) => ({
  label: t.name,
  value: t.name,
  color: t.color,
}));

type ParametersProps = {
  sortFunc: SortFunc<Project> | null,
  onSortFuncChange: (newValue: SortFunc<Project> | null) => void,
  tags: string[],
  onTagsChange: (newValue: string[]) => void,
}

const Parameters = ({
  sortFunc,
  onSortFuncChange,
  tags,
  onTagsChange,
}: ParametersProps) => {
  const [
    selectedSortOption,
    setSelectedSortOption,
  ] = useState<SortOption | null>(sortOptions[0]);

  const [
    selectedTagOptions,
    setSelectedTagOptions,
  ] = useState<readonly TagOption[] | null>([]);

  useEffect(() => {
    const newSortFunc = selectedSortOption?.value ?? null;
    if (newSortFunc !== sortFunc) {
      onSortFuncChange(newSortFunc);
    }
  }, [selectedSortOption]);

  useEffect(() => {
    if (sortFunc == null) {
      return;
    }

    setSelectedSortOption(
      sortOptions.find((so) => so.value === sortFunc) ?? null
    );
  }, [sortFunc]);

  useEffect(() => {
    const newTags = selectedTagOptions?.map((to) => to.value) ?? [];
    if (JSON.stringify(newTags) !== JSON.stringify(tags)) {
      onTagsChange(newTags);
    }
  }, [selectedTagOptions]);

  useEffect(() => {
    setSelectedTagOptions(
      tagOptions.filter((to) => tags.includes(to.value))
    );
  }, [tags]);

  const colourStyles: StylesConfig<TagOption> = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return getTagStyle(data.color, {
        styles,
        isDisabled,
        isFocused,
        isSelected,
      });
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };

  return (
    <div className={classes.parameters}>
      <div className={classes.parameter}>
        <span>Sort by</span>
        <Select
          className={classes.order}
          name="sort"
          options={sortOptions}
          onChange={setSelectedSortOption}
          placeholder="Sort order"
          value={selectedSortOption}
        />
      </div>
      <div className={classes.parameter}>
        <span>Filter by</span>
        <Select<TagOption, true>
          className={classes.tags}
          name="tags"
          options={tagOptions}
          isMulti
          styles={colourStyles}
          placeholder="Filter by tags"
          value={selectedTagOptions}
          onChange={setSelectedTagOptions}
        />
      </div>
    </div>
  )
}

export default Parameters;
