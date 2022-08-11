import styles from "./Parameters.module.css";
import Select, { StylesConfig } from "react-select";
import {
  useEffect,
  useState,
} from "react";
import chroma from "chroma-js";
import {
  Project,
  Tag,
} from "../utils/projectsData";
import { SortFunc } from "../utils/types";

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
  label: Tag,
  value: Tag,
  color: string,
};

const tagOptions: Array<TagOption> = [
  {
    label: "Web",
    value: "Web",
    color: '#FF8B00',
  },
  {
    label: "Work",
    value: "Work",
    color: '#0052CC',
  },
];

type ParametersProps = {
  sortFunc: SortFunc<Project> | null,
  onSortFuncChange: (newValue: SortFunc<Project> | null) => void,
  tags: Tag[],
  onTagsChange: (newValue: Tag[]) => void,
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
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
            ? data.color
            : isFocused
              ? color.alpha(0.1).css()
              : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
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
    <div className={styles.parameters}>
      <div className={styles.parameter}>
        <span>Sort by</span>
        <Select
          className={styles.order}
          name="sort"
          options={sortOptions}
          onChange={setSelectedSortOption}
          placeholder="Sort order"
          value={selectedSortOption}
        />
      </div>
      <div className={styles.parameter}>
        <span>Filter by</span>
        <Select<TagOption, true>
          className={styles.tags}
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
